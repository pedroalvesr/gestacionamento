package io.ribeiro.gestacionamento.web.rest;

import io.ribeiro.gestacionamento.model.Patio;
import io.ribeiro.gestacionamento.repository.PatioDAO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping("/patio")
public class PatioController {

   @Autowired
   private PatioDAO patioDAO;

   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
   public Patio inserir(@RequestBody Patio patio) {
      return patioDAO.save(patio);
   }

   @GetMapping
   public List<Patio> listar() {
      List<Patio> patios = new ArrayList<Patio>();
      patioDAO.findAll().forEach(patios::add);
      return patios;
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<Void> excluir(@PathVariable Long id) {
      patioDAO.deleteById(id);
      return ResponseEntity.ok(null);
   }

   @GetMapping("/vagas")
   public Map<String, Integer> totalVagas() {

      Map<String, Integer> map = new HashMap<>();

      int totalVagas = patioDAO.findByTotalVagas();
      int totalVagasOcupadas = patioDAO.findByTotalVagasOcupadas();
      int totalVagasLivres = totalVagas - totalVagasOcupadas;

      map.put("qtdVagas", totalVagas);
      map.put("totalVagasOcupadas", totalVagasOcupadas);
      map.put("totalVagasLivres", totalVagasLivres);

      return map;
   }

}
