package io.ribeiro.gestacionamento.web.rest;

import io.ribeiro.gestacionamento.model.Estacionamento;
import io.ribeiro.gestacionamento.repository.EstacionamentoDAO;

import java.text.ParseException;
import java.time.Duration;
import java.time.temporal.Temporal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
public class EstacionamentoController {

   @Autowired
   private EstacionamentoDAO estacionamentoDAO;

   @RequestMapping(value = "/estacionamento", method = RequestMethod.POST)
   public Estacionamento salvar(@RequestBody Estacionamento estacionamento) throws ParseException {

      Date saida = new Date();
      Date entrada = new Date();
      ;

      estacionamento.setSaida(saida);
      if (estacionamento.getSaida() != null) {

         long hr = Duration.between((Temporal) estacionamento.getEntrada().toInstant(), (Temporal) estacionamento.getSaida().toInstant()).toMinutes();

         estacionamento.setPermanencia(hr);

         if (hr <= 60) {
            estacionamento.setValor(estacionamento.getPatio().getTaxaHora());
         } else {
            estacionamento.setValor((hr * estacionamento.getPatio().getTaxaHora()) / 60);
         }

         return estacionamentoDAO.save(estacionamento);
      } else {
         estacionamento.setEntrada(entrada);

         return estacionamentoDAO.save(estacionamento);
      }
   }

   @RequestMapping(value = "/listar/veiculos", method = RequestMethod.GET)
   public List<Estacionamento> salvar() {
      List<Estacionamento> listaEstacionamento = new ArrayList<>();
      estacionamentoDAO.findAll().forEach(listaEstacionamento::add);
      return listaEstacionamento;
   }

}
