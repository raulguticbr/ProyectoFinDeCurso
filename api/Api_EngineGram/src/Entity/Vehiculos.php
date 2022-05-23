<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Vehiculos
 *
 * @ORM\Table(name="vehiculos")
 * @ORM\Entity(repositoryClass="App\Repository\VehiculosRepository")
 */
class Vehiculos
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_vehiculo", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idVehiculo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="marca", type="string", length=250, nullable=true)
     */
    private $marca;

    /**
     * @var string|null
     *
     * @ORM\Column(name="modelo", type="string", length=250, nullable=true)
     */
    private $modelo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="apodo", type="string", length=250, nullable=true)
     */
    private $apodo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="matricula", type="string", length=250, nullable=true)
     */
    private $matricula;

    /**
     * @var string|null
     *
     * @ORM\Column(name="descripcion", type="string", length=1000, nullable=true)
     */
    private $descripcion;

    /**
     * @var string|null
     *
     * @ORM\Column(name="tipo", type="string", length=250, nullable=true)
     */
    private $tipo;

    public function getIdVehiculo(): ?int
    {
        return $this->idVehiculo;
    }

    public function getMarca(): ?string
    {
        return $this->marca;
    }

    public function setMarca(?string $marca): self
    {
        $this->marca = $marca;

        return $this;
    }

    public function getModelo(): ?string
    {
        return $this->modelo;
    }

    public function setModelo(?string $modelo): self
    {
        $this->modelo = $modelo;

        return $this;
    }

    public function getApodo(): ?string
    {
        return $this->apodo;
    }

    public function setApodo(?string $apodo): self
    {
        $this->apodo = $apodo;

        return $this;
    }

    public function getMatricula(): ?string
    {
        return $this->matricula;
    }

    public function setMatricula(?string $matricula): self
    {
        $this->matricula = $matricula;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getTipo(): ?string
    {
        return $this->tipo;
    }

    public function setTipo(?string $tipo): self
    {
        $this->tipo = $tipo;

        return $this;
    }


}
