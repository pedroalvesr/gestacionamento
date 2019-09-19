package io.ribeiro.gestacionamento.web.rest;

import io.ribeiro.gestacionamento.model.Cliente;
import io.ribeiro.gestacionamento.model.Estacionamento;
import io.ribeiro.gestacionamento.model.Veiculo;
import io.ribeiro.gestacionamento.repository.ClienteDAO;
import io.ribeiro.gestacionamento.repository.EstacionamentoDAO;
import io.ribeiro.gestacionamento.repository.VeiculoDAO;

import java.util.Date;

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
public class VeiculoController {

   @Autowired
   private VeiculoDAO veiculoDAO;

   @Autowired
   private ClienteDAO clienteDAO;

   @Autowired
   private EstacionamentoDAO estacionamentoDAO;

   @RequestMapping(value = "/novo/veiculo", method = RequestMethod.POST)
   public Veiculo salvar(@RequestBody Veiculo veiculo) {

      salvarCliente(veiculo.getCliente());

      salvarEstacionamento(veiculo);

      return veiculoDAO.save(veiculo);
   }

   public Cliente salvarCliente(Cliente c) {

      if (c.getCpf() != null) {
         return clienteDAO.save(c);
      }
      return null;
   }

   public void salvarEstacionamento(Veiculo veiculo) {
      Estacionamento est = new Estacionamento();

      Date entrada = new Date();
      est.setEntrada(entrada);

      est.setPlaca(veiculo.getPlaca());
      est.setPatio(veiculo.getPatio());

      estacionamentoDAO.save(est);
   }

}
