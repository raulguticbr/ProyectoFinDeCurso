<?php

namespace App\Controller;

use App\Entity\Vehiculos;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\Check;


class VehiculosController extends AbstractController
{
    /**
     * @Route("/Vehiculos",name="app_vehiculo", methods={"GET","POST","PUT","DELETE"})
     */

    function vehiculo(Request $request, ManagerRegistry $doctrine): Response
    {


        if ($request->getMethod() == "POST") {

            return new Response($this->postMethod($request, $doctrine));
        } else if ($request->getMethod() == "GET") {

            return $this->getMethod($doctrine);
        } else if ($request->getMethod() == "PUT") {

            return new Response($this->putMethod($request, $doctrine));
        } else if ($request->getMethod() == "DELETE") {

            return new Response($this->deleteMethod($request, $doctrine));
        }
    } //vehiculo
    function postMethod($request, $doctrine): string
    {

        $entityManager = $doctrine->getManager();
        $json = $request->getContent();
        $VehiculosInfo = json_decode($json);

        try {
            $vehiculo = new Vehiculos();
            $vehiculo->setMarca($VehiculosInfo->marca);
            $vehiculo->setModelo($VehiculosInfo->modelo);
            $vehiculo->setApodo($VehiculosInfo->apodo);
            $vehiculo->setMatricula($VehiculosInfo->matricula);
            $vehiculo->setDescripcion($VehiculosInfo->descripcion);
            $vehiculo->setTipo($VehiculosInfo->tipo);

            $entityManager->persist($vehiculo);
            $entityManager->flush();
            $endValue = true;
        } catch (Exception $e) {
            $endValue = false;
            dump($e);
        } //catch
        if ($endValue) {
            $endValueString = 'Todo correcto';
        } else {
            $endValueString = 'Algo no ha salido correctamente';
        } //else
        return $endValueString;
    } //metodoPost

    function getMethod($doctrine): Response
    {

        $result = $doctrine->getRepository(Vehiculos::class)->Consulta();
        $response = new JsonResponse($result);


        return $response;
    } //metodoGet

    function putMethod($request, $doctrine): string
    {
        $entityManager = $doctrine->getManager();
        $json = $request->getContent();
        $VehiculosInfo = json_decode($json);

        $vehiculo = $doctrine->getRepository(Vehiculos::class)->find($VehiculosInfo->id);
        if ($vehiculo != null) {
            $vehiculo->setMarca($VehiculosInfo->marca);
            $vehiculo->setModelo($VehiculosInfo->modelo);
            $vehiculo->setApodo($VehiculosInfo->apodo);
            $vehiculo->setMatricula($VehiculosInfo->matricula);
            $vehiculo->setDescripcion($VehiculosInfo->descripcion);
            $vehiculo->setTipo($VehiculosInfo->tipo);

            $entityManager->flush();
            $endValue = true;
        } else {
            echo nl2br("El vehiculo con el id que ha introducido no existe \n");
            $endValue = false;
        }

        if ($endValue) {
            $endValueString = 'Todo correcto';
        } else {
            $endValueString = 'Algo no ha salido correctamente';
        } //else
        return $endValueString;
    } //metodoPut

    function deleteMethod($request, $doctrine): String
    {
        $entityManager = $doctrine->getManager();
        $json = $request->getContent();
        $VehiculosInfo = json_decode($json);
        try {
            $vehiculo = $doctrine->getRepository(Vehiculos::class)->find($VehiculosInfo->id);
            $entityManager->remove($vehiculo);
            $entityManager->flush();
            $endValue = true;
        } catch (Exception $e) {
            $endValue = false;
        }
        if ($endValue) {
            $endValueString = 'Todo correcto';
        } else {
            $endValueString = 'Algo no ha salido correctamente';
        } //else
        return $endValueString;
    } //metodoDelete

}
