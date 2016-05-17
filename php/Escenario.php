<?php
	include 'Puntos.php';

	function distance( $p0, $p1 ){
		return sqrt( pow(($p1->getX() - $p0->getX()), 2) + pow(($p1->getZ() - $p0->getZ()), 2) );
	}

	class Escenario{
		private $coordenadas;
		private $indices;	//Ahora mismo no lo voy a usar

		function __construct( $path_x3d ) {
	  		$this->coordenadas = array();

	  		$xml=simplexml_load_file( $path_x3d ) or die("Error: Cannot create object");

	  		foreach ($xml->Scene->Transform as $node) {
				//$indicesString = $node->Transform->Group->Shape->IndexedFaceSet->attributes()->coordIndex;
		   		$coordString = $node->Transform->Group->Shape->IndexedFaceSet->Coordinate->attributes()->point;

		   		//$indi = explode(" ", $indicesString);
		   		$coords = explode(" ", $coordString);

		   		/*foreach (array_keys($indi, '-1') as $key) {
				    unset($indi[$key]);
				}*/

				//$indices = array_values($indi);
				for($i=0; $i+3<count($coords); $i+=3){
					$punto = new Punto();
					$punto->setX( (float) $coords[$i]);
					$punto->setY( (float) $coords[$i+1]);
					$punto->setZ( (float) $coords[$i+2]);

					$this->coordenadas[] = $punto;
				}
			}
		}

	 	public function getCoords() {
	 		echo 'coordenadas: <br>';
			for($i=0; $i<count($this->coordenadas); $i++){
				echo '(' . $this->coordenadas[$i]->getX() . ', ' . $this->coordenadas[$i]->getY() . ', ' . $this->coordenadas[$i]->getZ() . ') <br>';
			}
	 	}

	 	public function findMinPoint( $pCuadro ){
	 		$minDist = INF;
	 		$minPoint;

	 		for($i=0; $i<count($this->coordenadas); $i++){
	 			if($pCuadro->getY() >=  ($this->coordenadas[$i]->getY()/10) ){
		 			$dist = distance( $pCuadro, $this->coordenadas[$i] );

		 			if( $dist < $minDist ){
		 				$minDist = $dist;
		 				$minPoint =  $this->coordenadas[$i];
		 			}
		 		}
	 		}

	 		return $minPoint;
	 	}
	}

	function getPicturePoint( $pCuadro, $minPoint ){
		if( ($pCuadro->getX() - $minPoint->GetX()) < ($pCuadro->getZ() - $minPoint->GetZ()) ){
			$pCuadro->setX( $minPoint->GetX() );
		}
		else{
			$pCuadro->setZ( $minPoint->GetZ() );
		}

		return $pCuadro;
	}

?>