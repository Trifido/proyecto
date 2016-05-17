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

?>