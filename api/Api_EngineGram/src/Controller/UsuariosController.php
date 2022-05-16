<?php

namespace App\Controller;

use App\Entity\Usuarios;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\Check;


class UsuariosController extends AbstractController
{
    /**
     * @Route("/Usuarios",name="app_usuario", methods={"GET","POST","PUT","DELETE"})
     */

    function usuario(Request $request, ManagerRegistry $doctrine): Response
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
    } //usuario
    function postMethod($request, $doctrine): string
    {

        $entityManager = $doctrine->getManager();
        $json = $request->getContent();
        $UsuarioInfo = json_decode($json);

        try {
            $usuario = new Usuarios();
            $usuario->setNombre($UsuarioInfo->nombre);
            $usuario->setApellidos($UsuarioInfo->apellidos);
            $usuario->setCorreo($UsuarioInfo->correo);
            $usuario->setNick($UsuarioInfo->nick);
            $usuario->setContraseña($UsuarioInfo->contrasena);


            $entityManager->persist($usuario);
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

        $result = $doctrine->getRepository(Usuarios::class)->Consulta();
        $response = new JsonResponse($result);


        return $response;
    } //metodoGet

    function putMethod($request, $doctrine): string
    {
        $entityManager = $doctrine->getManager();
        $json = $request->getContent();
        $UsuarioInfo = json_decode($json);

        $usuario = $doctrine->getRepository(Usuarios::class)->find($UsuarioInfo->id);
        if ($usuario != null) {
            $usuario->setNombre($UsuarioInfo->nombre);
            $usuario->setApellidos($UsuarioInfo->apellidos);
            $usuario->setCorreo($UsuarioInfo->correo);
            $usuario->setNick($UsuarioInfo->nick);
            $usuario->setContraseña($UsuarioInfo->contraseña);

            $entityManager->flush();
            $endValue = true;
        } else {
            echo nl2br("El usuario con el id que ha introducido no existe \n");
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
        $UsuarioInfo = json_decode($json);
        try {
            $usuario = $doctrine->getRepository(Usuarios::class)->find($UsuarioInfo->id);
            $entityManager->remove($usuario);
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
