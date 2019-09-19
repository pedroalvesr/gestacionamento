package io.ribeiro.gestacionamento.repository;

import io.ribeiro.gestacionamento.model.Cliente;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */
public interface ClienteDAO extends CrudRepository<Cliente, Long> {

}
