package cz.cutesystems.cv.controller;

import cz.cutesystems.cv.model.User;
import cz.cutesystems.cv.model.UserProjection;
import cz.cutesystems.cv.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


/**
 * Created by kutik on 19.02.18.
 */
@RestController
@RequestMapping("/api")
public class ApiController {

    private final UserRepository userRepository;

    @Autowired
    ApiController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping("/users")
    public Collection<UserProjection> users(){
        return this.userRepository.findAllProjectedBy();
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping("/users/{id}")
    public User userById(@PathVariable Long id){
        return this.userRepository.findOne(id);
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public User createUser(@RequestBody User user){
        return this.userRepository.save(user);
    }

}
