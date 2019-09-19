/**
 * 
 */
package io.ribeiro.gestacionamento.repository;

import io.ribeiro.gestacionamento.model.Usuario;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */

public interface UsuarioDAO extends CrudRepository<Usuario, Long> {

   public Usuario findByEmail(String email);

}
