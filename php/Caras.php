<?php
	class Cara{
		private $c1;
		private $c2;
		private $c3;
        private $ecPlano;

		public function setC1( $c1Value ) {
        	$this->c1 = $c1Value;
    	}

    	public function setC2( $c2Value ) {
            $this->c2 = $c2Value;
        }

    	public function setC3( $c3Value ) {
            $this->c3 = $c3Value;
        }

        public function setEcPlano( $ecPlanoValue ) {
            $this->ecPlano = $ecPlanoValue;
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

        public function getEcPlano() {
            return $this->ecPlano;
        }

        public function getIndices(){
            return ($this->c1 . ' ' . $this->c2 . ' ' . $this->c3);
        }
	}

    function obtainEcPlano( $punto1, $punto2, $punto3 ){
        $V2V1 = new Punto();
        $V3V1 = new Punto();
        $result = new ecPlano();

        $V2V1->setX( $punto2->getX() - $punto1->getX() );
        $V2V1->setY( $punto2->getY() - $punto1->getY() );
        $V2V1->setZ( $punto2->getZ() - $punto1->getZ() );

        $V3V1->setX( $punto3->getX() - $punto1->getX() );
        $V3V1->setY( $punto3->getY() - $punto1->getY() );
        $V3V1->setZ( $punto3->getZ() - $punto1->getZ() );

        $PlanoXpos = ($V2V1->getY() * $V3V1->getZ());
        $PlanoXneg = ($V2V1->getZ() * $V3V1->getY());
        $result->setX( $PlanoXpos - $PlanoXneg );

        $PlanoYpos = ($V2V1->getZ() * $V3V1->getX());
        $PlanoYneg = ($V2V1->getX() * $V3V1->getZ());
        $result->setY( $PlanoYpos - $PlanoYneg );

        $PlanoZpos = ($V2V1->getX() * $V3V1->getY());
        $PlanoZneg = ($V2V1->getY() * $V3V1->getX());
        $result->setZ( $PlanoZpos - $PlanoZneg );

        $result->setD( ($PlanoXpos*$punto1->getX()) + ($PlanoYpos*$punto1->getY()) + ($PlanoZpos*$punto1->getZ()) - ($PlanoXneg*$punto1->getX()) - ($PlanoYneg*$punto1->getY()) - ($PlanoZneg*$punto1->getZ()) );

        return $result;
    }

    function distancePointPlane( $ecPlano, $point){
        $dividendo = $ecPlano->getX()*$point->getX() + $ecPlano->getY()*$point->getY() + $ecPlano->getZ()*$point->getZ() + $ecPlano->getD();

        if($dividendo < 0)
            $dividendo *= -1;

        $divisor = sqrt( ($ecPlano->getX()*$ecPlano->getX()) + ($ecPlano->getY()*$ecPlano->getY()) + ($ecPlano->getZ()*$ecPlano->getZ()) );

        return $dividendo/$divisor;
    }

?>