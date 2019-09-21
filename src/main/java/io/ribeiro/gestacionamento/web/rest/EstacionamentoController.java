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
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Pedro Ribeiro
 *
 */

@RestController
@RequestMapping("/estacionamento")
public class EstacionamentoController {

   @Autowired
   private EstacionamentoDAO estacionamentoDAO;

   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
   public Estacionamento inserir(@RequestBody Estacionamento estacionamento) throws ParseException {

      Date saida = new Date();
      Date entrada = new Date();

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

   @GetMapping
   public List<Estacionamento> listar() {
      List<Estacionamento> estacionamento = new ArrayList<>();
      estacionamentoDAO.findAll().forEach(estacionamento::add);
      return estacionamento;
   }

}
