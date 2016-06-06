<?php
	class ecPlano{
		private $X;
		private $Y;
		private $Z;
        private $D;

		public function setX( $xValue ) {
        	$this->X = $xValue;
    	}

    	public function setY( $yValue ) {
            $this->Y = $yValue;
        }

    	public function setZ( $zValue ) {
            $this->Z = $zValue;
        }

        public function setD( $DValue ) {
            $this->D = $DValue;
        }

    	public function getX() {
        	return $this->X;
    	}

    	public function getY() {
        	return $this->Y;
    	}

    	public function getZ() {
        	return $this->Z;
    	}

        public function getD() {
            return $this->D;
        }
    }
?>