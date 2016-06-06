<?php
	include 'Puntos.php';
	include 'Caras.php';
	include 'ecPlano.php';

	function distance( $p0, $p1 ){
		return sqrt( pow(($p1->getX() - $p0->getX()), 2) + pow(($p1->getZ() - $p0->getZ()), 2) );
	}

	class Escenario{
		private $coordenadas;
		private $resultCoords;
		private $resultLocalCoords;
		private $indices;
		private $caras;

		function __construct( $path_x3d ) {
	  		$this->coordenadas = array();
	  		$this->resultCoords = array();
	  		$this->caras = array();

	  		$xml=simplexml_load_file( $path_x3d ) or die("Error: Cannot create object");

	  		session_start();

	  		$ind=0;

	  		foreach ($xml->Scene->Transform as $node) {

		   		$coordString = $node->Transform->Group->Shape->IndexedFaceSet->Coordinate->attributes()->point;
		   		$indicesString = $node->Transform->Group->Shape->IndexedFaceSet->attributes()->coordIndex;

		   		$coords = explode(" ", $coordString);
		   		$indi = explode(" ", $indicesString);

		   		foreach (array_keys($indi, '-1') as $key) {
				    unset($indi[$key]);
				}
				$indices = array_values($indi);

				for($i=0; $i+3<count($indices); $i+=3){

					$cara = new Cara();
					$cara->setC1( (float) $indices[$i]);
					$cara->setC2( (float) $indices[$i+1]);
					$cara->setC3( (float) $indices[$i+2]);

					$this->caras[$ind][] = $cara;
				}

				for($i=0; $i+3<count($coords); $i+=3){
					$punto = new Punto();
					$punto->setX( (float) $coords[$i+1]);
					$punto->setY( (float) $coords[$i+2]);
					$punto->setZ( (float) $coords[$i]);

					$this->coordenadas[$ind][] = $punto;
				}

				for($i=0; $i<count($this->caras[$ind]); $i++){
					$ecPlane = obtainEcPlano( $this->coordenadas[$ind][$this->caras[$ind][$i]->getC1()], $this->coordenadas[$ind][$this->caras[$ind][$i]->getC2()], $this->coordenadas[$ind][$this->caras[$ind][$i]->getC3()] );
					
					$this->caras[$ind][$i]->setEcPlano( $ecPlane );
				}
				$ind++;
			}
		}

/*
		public function esTecho($picturePoint, $p1, $p2, $p3){
			return (($picturePoint->getY() < $p1->getY()) && ($picturePoint->getY() < $p2->getY()) && ($picturePoint->getY() < $p3->getY()));
		}

		public function esSuelo($picturePoint, $p1, $p2, $p3){
			return (($picturePoint->getY() > $p1->getY()) && ($picturePoint->getY() > $p2->getY()) && ($picturePoint->getY() > $p3->getY()));
		}
*/

/******************************************************************************
		public function calculateMinTriangle( $picturePoint ){
			$minDist= INF;
			$vA; $vB; $vC;
			$stringer = array();
			for($i=0; $i<count($this->caras); $i++){
				for($j=0; $j<count($this->caras[$i]);$j++){
					//$stringer[] = "( " . $this->caras[$i][$j]->getNormal()->getX() . ", " . $this->caras[$i][$j]->getNormal()->getY() . ", " . $this->caras[$i][$j]->getNormal()->getZ() . " )";
					$hayTecho = $this->esTecho($picturePoint, $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()]);
					$haySuelo = $this->esSuelo($picturePoint, $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()]);

					if( !$hayTecho && !$haySuelo ){
						$dist = distancePointPlane( $this->caras[$i][$j]->getEcPlano(), $picturePoint);

						if( $minDist > $dist ){
							$vA = $this->coordenadas[$i][$this->caras[$i][$j]->getC1()];
							$vB = $this->coordenadas[$i][$this->caras[$i][$j]->getC2()];
							$vC = $this->coordenadas[$i][$this->caras[$i][$j]->getC3()];
							$minDist = $dist;
							$this->obtenerRestoPuntos($vA, $vB, $vC);
						}
					}

				}
			}

			
			//$_SESSION["auxVar"] += "\nvB( " . $vB->getX() . " " . $vB->getY() . " " . $vB->getZ() . " )";
			//$_SESSION["auxVar"] += "\nVC( " . $vC->getX() . " " . $vC->getY() . " " . $vC->getZ() . " )";
			//$vA . " " . $vB . " " . $vC;

			//$this->obtenerRestoPuntos($vA, $vB, $vC);
		}
******************************************************************************/

		public function calculateIntMinPoint( $picturePoint, $rotation ){
			$minDist = INF;
			$minPoint = new Punto();

			for($i=0; $i<count($this->caras); $i++){
				for($j=0; $j<count($this->caras[$i]);$j++){

					$pared = findPlane( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()] );

					if( $rotation < 45 || $rotation > 315 ){
						$zMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );
						if( ($pared == 2) && ($zMax < $picturePoint->getZ()) ){
							//Comprobamos que está dentro del triangulo
							$xMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );
							$xMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );

							if( $picturePoint->getX() > $xMin && $picturePoint->getX() < $xMax ){

								$minIntPoint = new Punto();
								$minIntPoint->setX( $picturePoint->getX() );
								$minIntPoint->setY( $picturePoint->getY() );
								$minIntPoint->setZ( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()]->getZ() );

								$dist= distancePointToPoint( $picturePoint, $minIntPoint );

								if( $dist < $minDist ){
									$minDist = $dist;
									$minPoint = $minIntPoint;
								}
							}
						}
					}
					else if( $rotation > 45 && $rotation < 135 ){
						$xMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );
						if( ($pared == 1) && ($xMin > $picturePoint->getX()) ){
							//Comprobamos que está dentro del triangulo
							$zMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );
							$zMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );

							if( $picturePoint->getZ() > $zMin && $picturePoint->getZ() < $zMax ){

								$minIntPoint = new Punto();
								$minIntPoint->setX( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()]->getX() );
								$minIntPoint->setY( $picturePoint->getY() );
								$minIntPoint->setZ( $picturePoint->getZ() );

								$dist= distancePointToPoint( $picturePoint, $minIntPoint );

								if( $dist < $minDist ){
									$minDist = $dist;
									$minPoint = $minIntPoint;
								}
							}
						}
					}
					else if( $rotation > 135 && $rotation < 225 ){
						$zMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );
						if( ($pared == 2) && ($zMin > $picturePoint->getZ()) ){
							//Comprobamos que está dentro del triangulo
							$xMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );
							$xMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );

							if( $picturePoint->getX() > $xMin && $picturePoint->getX() < $xMax ){

								$minIntPoint = new Punto();
								$minIntPoint->setX( $picturePoint->getX() );
								$minIntPoint->setY( $picturePoint->getY() );
								$minIntPoint->setZ( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()]->getZ() );

								$dist= distancePointToPoint( $picturePoint, $minIntPoint );

								if( $dist < $minDist ){
									$minDist = $dist;
									$minPoint = $minIntPoint;
								}
							}
						}
					}
					else if( $rotation > 225 && $rotation < 315 ){
						$xMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 2 );
						if( ($pared == 1) && ($xMax < $picturePoint->getX()) ){
							//Comprobamos que está dentro del triangulo
							$zMin = obtainMin( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );
							$zMax = obtainMax( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()], $this->coordenadas[$i][$this->caras[$i][$j]->getC2()], $this->coordenadas[$i][$this->caras[$i][$j]->getC3()], 1 );

							if( $picturePoint->getZ() > $zMin && $picturePoint->getZ() < $zMax ){

								$minIntPoint = new Punto();
								$minIntPoint->setX( $this->coordenadas[$i][$this->caras[$i][$j]->getC1()]->getX() );
								$minIntPoint->setY( $picturePoint->getY() );
								$minIntPoint->setZ( $picturePoint->getZ() );

								$dist= distancePointToPoint( $picturePoint, $minIntPoint );

								if( $dist < $minDist ){
									$minDist = $dist;
									$minPoint = $minIntPoint;
								}
							}
						}
					}
					
				}
			}
			return $minPoint;
		}
/*
		public function obtenerRestoPuntos($vA, $vB, $vC){
			//Obtener el resto de puntos  count($this->caras) 
			//for($i=0; $i<count($this->caras); $i++){
				//$eqPlane = findPlane( $vA, $vB, $vC );

				//if($eqPlane > 0){
					//Inicializamos el array local
					$this->resultLocalCoords = array();

					$this->resultLocalCoords[] = $vA;
					$this->resultLocalCoords[] = $vB;
					$this->resultLocalCoords[] = $vC;
					
					//$this->resultLocalCoords = obtainPoints( $this->coordenadas[$this->caras[$i]->getC1()], $this->coordenadas[$this->caras[$i]->getC2()], $this->coordenadas[$this->caras[$i]->getC3()], $eqPlane);

					$this->resultCoords = array_merge($this->resultCoords, $this->resultLocalCoords);
					//$this->resultCoords = obtainPoints( $vA, $vB, $vC, $eqPlane);
				//}
			//}
		}

		public function getCaras() {
			echo 'numero caras: ' . count($this->caras) . '<br>';
	 		echo 'indices: <br>';
			for($i=0; $i<count($this->caras); $i++){
				echo '(' . $this->caras[$i]->getC1() . ', ' . $this->caras[$i]->getC2() . ', ' . $this->caras[$i]->getC3() . ') <br>';
			}
	 	}

	 	public function getCoords() {
	 		echo 'coordenadas: ' . count($this->resultCoords) . '<br>';

			for($i=0; $i<count($this->resultCoords); $i++)
				echo '(' . $this->resultCoords[$i]->getX() . ', ' . $this->resultCoords[$i]->getY() . ', ' . $this->resultCoords[$i]->getZ() . ') <br>';
	 	}
*/
/*
	 	public function findMinPoint( $pCuadro ){
	 		$minDist = INF;
	 		$minPoint;
	 		$auxCont = 0;

	 		for($i=0; $i<count($this->resultCoords); $i++){
	 			//if($pCuadro->getY() >=  ($this->resultCoords[$i]->getY()/10) ){
		 			$dist = distance( $pCuadro, $this->resultCoords[$i] );

		 			if( $dist < $minDist ){
		 				$minDist = $dist;
		 				$minPoint =  $this->resultCoords[$i];
		 			}
		 		//}
	 		}
	 		$_SESSION["auxVar"] = "minpoint( " . $minPoint->getX() . " " . $minPoint->getY() . " " . $minPoint->getZ() . " )"; 
	 		return $minPoint;
	 	}
*/
	}
/*
	function getPicturePoint( $pCuadro, $minPoint ){
		if( ($pCuadro->getX() - $minPoint->getX()) < ($pCuadro->getZ() - $minPoint->getZ()) ){
			$pCuadro->setX( $minPoint->getX() );
		}
		else{
			$pCuadro->setZ( $minPoint->getZ() );
		}

		return $pCuadro;
	}
*/
?>