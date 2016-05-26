<?php
	include 'Puntos.php';
	include 'Caras.php';

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

					$this->caras[] = $cara;
				}

				for($i=0; $i+3<count($coords); $i+=3){
					$punto = new Punto();
					$punto->setX( (float) $coords[$i+1]);
					$punto->setY( (float) $coords[$i+2]);
					$punto->setZ( (float) $coords[$i]);

					$this->coordenadas[] = $punto;
				}

				//Obtener el resto de puntos  count($this->caras) 
				for($i=0; $i<count($this->caras); $i++){
					$eqPlane = findPlane( $this->coordenadas[$this->caras[$i]->getC1()], $this->coordenadas[$this->caras[$i]->getC2()], $this->coordenadas[$this->caras[$i]->getC3()] );

					if($eqPlane > 0){
						//Inicializamos/vaciamos el array local
						$this->resultLocalCoords = array();
						
						$this->resultLocalCoords = obtainPoints( $this->coordenadas[$this->caras[$i]->getC1()], $this->coordenadas[$this->caras[$i]->getC2()], $this->coordenadas[$this->caras[$i]->getC3()], $eqPlane);

						$this->resultCoords = array_merge($this->resultCoords, $this->resultLocalCoords);
					}
				}
			}
		}

		public function getCaras() {
			echo 'numero caras: ' . count($this->caras) . '<br>';
	 		/*echo 'indices: <br>';
			for($i=0; $i<count($this->caras); $i++){
				echo '(' . $this->caras[$i]->getC1() . ', ' . $this->caras[$i]->getC2() . ', ' . $this->caras[$i]->getC3() . ') <br>';
			}*/
	 	}

	 	public function getCoords() {
	 		echo 'coordenadas: ' . count($this->resultCoords) . '<br>';

			for($i=0; $i<count($this->resultCoords); $i++)
				echo '(' . $this->resultCoords[$i]->getX() . ', ' . $this->resultCoords[$i]->getY() . ', ' . $this->resultCoords[$i]->getZ() . ') <br>';
	 	}

	 	public function findMinPoint( $pCuadro ){
	 		$minDist = INF;
	 		$minPoint;
	 		$auxCont = 0;

	 		for($i=0; $i<count($this->resultCoords); $i++){
	 			if($pCuadro->getY() >=  ($this->resultCoords[$i]->getY()/10) ){
		 			$dist = distance( $pCuadro, $this->resultCoords[$i] );

		 			if( $dist < $minDist ){
		 				$minDist = $dist;
		 				$minPoint =  $this->resultCoords[$i];
		 			}
		 		}
	 		}

	 		return $minPoint;
	 	}
	}

	function getPicturePoint( $pCuadro, $minPoint ){
		if( ($pCuadro->getX() - $minPoint->getX()) < ($pCuadro->getZ() - $minPoint->getZ()) ){
			$pCuadro->setX( $minPoint->getX() );
		}
		else{
			$pCuadro->setZ( $minPoint->getZ() );
		}

		return $pCuadro;
	}

?>