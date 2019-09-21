package io.ribeiro.gestacionamento.web.rest;

import io.ribeiro.gestacionamento.model.Usuario;
import io.ribeiro.gestacionamento.repository.UsuarioDAO;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.security.crypto.bcrypt.BCrypt;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Pedro Ribeiro
 *
 */

@RestController
@RequestMapping("/login")
public class UsuarioController {

   @Autowired
   private UsuarioDAO usuarioDAO;

   @PostMapping("/novo")
   public Usuario salvar(@RequestBody Usuario usuario) throws NoSuchAlgorithmException, UnsupportedEncodingException {

      String senha = usuario.getSenha();

      if (usuario.getEmail() != null) {
         MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
         algorithm.update(senha.getBytes("UTF-8"));

         usuario.setSenha(new BigInteger(1, algorithm.digest()).toString(16));
      }
      return usuarioDAO.save(usuario);
   }

   @PostMapping
   public boolean login(@RequestBody Usuario usuario) throws NoSuchAlgorithmException, UnsupportedEncodingException {

      String senha = usuario.getSenha();
      try {
         Usuario u = usuarioDAO.findByEmail(usuario.getEmail());
         
         MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
         algorithm.update(senha.getBytes("UTF-8"));

         senha = new BigInteger(1, algorithm.digest()).toString(16);
         
         if (Objects.isNull(u.getEmail()) && u.getSenha().equals(senha)) {

            return true;
         }
         return false;

      } catch (Exception e) {
         // TODO: handle exception
         return false;
      }

     

      
      
   }

}
