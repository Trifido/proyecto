<?php
	class Punto{
		private $x;
		private $y;
		private $z;

		public function setX( $xValue ) {
        	$this->x = $xValue;
    	}

    	public function setY( $yValue ) {
        	$this->y = $yValue;
    	}

    	public function setZ( $zValue ) {
        	$this->z = $zValue;
    	}

    	public function getX() {
        	return $this->x;
    	}

    	public function getY() {
        	return $this->y;
    	}

    	public function getZ() {
        	return $this->z;
    	}

        public function interpolCoord() {
            $this->x = ($this->x)/10;
            $this->z = ($this->z)/10;
        }

        public function getCoordinates(){
            return ($this->x . ' ' . $this->y . ' ' . $this->z);
        }
	}

    function findPlane( $punto1, $punto2, $punto3 ){
        if( $punto1->getX() == $punto2->getX() && $punto2->getX() == $punto3->getX() )
            return 1;
        else if( $punto1->getY() == $punto2->getY() && $punto2->getY() == $punto3->getY() )
            return -1;   //Techos y suelos
        else if( $punto1->getZ() == $punto2->getZ() && $punto2->getZ() == $punto3->getZ() )
            return 3;
        else
            return -1;   //No es una pared
    }

    function obtainMin( $punto1, $punto2, $punto3, $eqPlane ){
        $min = INF;
        if($eqPlane == 1){
            if($punto1->getZ() < $punto2->getZ()){
                $min = $punto1->getZ();
            }
            else{
                $min = $punto2->getZ();
            }

            if($min > $punto3->getZ())
                $min = $punto3->getZ();
        }
        else if($eqPlane == 3){
            if($punto1->getX() < $punto2->getX()){
                $min = $punto1->getX();
            }
            else{
                $min = $punto2->getX();
            }

            if($min > $punto3->getX())
                $min = $punto3->getX();
        }
        return $min;
    }

    function obtainMax( $punto1, $punto2, $punto3, $eqPlane ){
        $max = -INF;
        if($eqPlane == 1){
            if($punto1->getZ() > $punto2->getZ()){
                $max = $punto1->getZ();
            }
            else{
                $max = $punto2->getZ();
            }

            if($max < $punto3->getZ())
                $max = $punto3->getZ();
        }
        else if($eqPlane == 3){
            if($punto1->getX() > $punto2->getX()){
                $max = $punto1->getX();
            }
            else{
                $max = $punto2->getX();
            }

            if($max < $punto3->getX())
                $max = $punto3->getX();
        }
        return $max;
    }

    function obtainPoints( $punto1, $punto2, $punto3, $eqPlane ){
        $coordsLocal = array();
        $min = obtainMin( $punto1, $punto2, $punto3, $eqPlane );
        $max = obtainMax( $punto1, $punto2, $punto3, $eqPlane );

        for($i=$min; $i<$max; $i+=0.05){
            $puntoNuevo = new Punto();

            if($eqPlane == 1){
                $puntoNuevo->setX($punto1->getX());
                $puntoNuevo->setZ($i);
            }
            else if($eqPlane == 3){
                $puntoNuevo->setX($i);
                $puntoNuevo->setZ($punto1->getZ());
            }

            $puntoNuevo->setY(0.3);

            $coordsLocal[] = $puntoNuevo;
        }
        return $coordsLocal;
    }

?>