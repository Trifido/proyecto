<?php
	class Cara{
		private $c1;
		private $c2;
		private $c3;

		public function setC1( $c1Value ) {
        	$this->c1 = $c1Value;
    	}

    	public function setC2( $c2Value ) {
            $this->c2 = $c2Value;
        }

    	public function setC3( $c3Value ) {
            $this->c3 = $c3Value;
        }

    	public function getC1() {
        	return $this->c1;
    	}

    	public function getC2() {
        	return $this->c2;
    	}

    	public function getC3() {
        	return $this->c3;
    	}

        public function getIndices(){
            return ($this->c1 . ' ' . $this->c2 . ' ' . $this->c3);
        }
	}

?>