package io.ribeiro.gestacionamento.repository;

import io.ribeiro.gestacionamento.model.Estacionamento;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */

public interface EstacionamentoDAO extends CrudRepository<Estacionamento, Long> {

}
