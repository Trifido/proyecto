<?php
	class Cara{
		private $c1;
		private $c2;
		private $c3;
        private $normal;
        private $D;

		public function setC1( $c1Value ) {
        	$this->c1 = $c1Value;
    	}

    	public function setC2( $c2Value ) {
            $this->c2 = $c2Value;
        }

    	public function setC3( $c3Value ) {
            $this->c3 = $c3Value;
        }

        public function setNormal( $normValue ) {
            $this->normal = $normValue;
        }

        public function setD( $DValue ) {
            $this->D = $DValue;
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

        public function getNormal() {
            return $this->normal;
        }

        public function getD() {
            return $this->D;
        }

        public function getIndices(){
            return ($this->c1 . ' ' . $this->c2 . ' ' . $this->c3);
        }
	}

    function obtainNormal( $punto1, $punto2, $punto3 ){
        $V2V1 = new Punto();
        $V3V1 = new Punto();

        $V2V1->setX( $punto2->getX() - $punto1->getX() );
        $V2V1->setY( $punto2->getY() - $punto1->getY() );
        $V2V1->setZ( $punto2->getZ() - $punto1->getZ() );

        $V3V1->setX( $punto3->getX() - $punto1->getX() );
        $V3V1->setY( $punto3->getY() - $punto1->getY() );
        $V3V1->setZ( $punto3->getZ() - $punto1->getZ() );

        $dotDif = new Punto();

        $dotDif->setX( $V2V1->getX() * $V3V1->getX() );
        $dotDif->setY( $V2V1->getY() * $V3V1->getY() );
        $dotDif->setZ( $V2V1->getZ() * $V3V1->getZ() );

        $divisor = $dotDif;

        if($divisor->getX() < 0)
            $divisor->setX( -1 * $divisor->getX() );
        if($divisor->getY() < 0)
            $divisor->setY( -1 * $divisor->getY() );
        if($divisor->getZ() < 0)
            $divisor->setZ( -1 * $divisor->getZ() );

        $result = new Punto();

        $result->setX( $dotDif->getX() / $divisor->getX() );
        $result->setY( $dotDif->getY() / $divisor->getY() );
        $result->setZ( $dotDif->getZ() / $divisor->getZ() );

        return $result;
    }

    function obtainD( $normal, $point){
        return -$normal->getX()*$point->getX() - $normal->getY()*$point->getY() - $normal->getZ()*$point->getZ();
    }

    function distancePointPlane( $normal, $D, $point){
        $dividendo = $normal->getX()*$point->getX() + $normal->getY()*$point->getY() + $normal->getZ()*$point->getZ() + $D;

        if($dividendo < 0)
            $dividendo *= -1;

        $divisor = sqrt( ($normal->getX()*$normal->getX()) + ($normal->getY()*$normal->getY()) + ($normal->getZ()*$normal->getZ()) );

       /* if($divisor == 0 ){
            session_start();
            $_SESSION["auxVar"] = "( " . $normal->getX() . ", " . $normal->getY() . ", " . $normal->getZ() ." )";
        }*/

        return $dividendo/$divisor;
    }

?>