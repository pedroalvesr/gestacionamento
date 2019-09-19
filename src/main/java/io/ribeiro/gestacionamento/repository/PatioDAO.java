package io.ribeiro.gestacionamento.repository;

import io.ribeiro.gestacionamento.model.Patio;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */
public interface PatioDAO extends CrudRepository<Patio, Long> {
   
   @Query(value = "select sum(qtdVaga) from Patio")
   public int findByTotalVagas();
   
   @Query(value = "select count(*) as vagasOcupadas from Estacionamento where saida is null")
   public int findByTotalVagasOcupadas();

}
