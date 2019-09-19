package io.ribeiro.gestacionamento.web.rest;

import io.ribeiro.gestacionamento.model.Cliente;
import io.ribeiro.gestacionamento.repository.ClienteDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Pedro Ribeiro
 *
 */

@RestController
public class ClienteController {
   
   @Autowired
   private ClienteDAO clienteDAO;
   
   @RequestMapping(value = "/novo/cliente", method = RequestMethod.POST)
   public Cliente salvar(@RequestBody Cliente cliente) {
            
      return clienteDAO.save(cliente);
   }
   

}
