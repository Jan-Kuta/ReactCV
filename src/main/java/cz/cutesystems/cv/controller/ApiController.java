package cz.cutesystems.cv.controller;

import cz.cutesystems.cv.model.User;
import cz.cutesystems.cv.model.UserProjection;
import cz.cutesystems.cv.repository.UserRepository;
import org.springframework.beans.BeanUtils;
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

    public static <T> T combine2Objects(T a, T b) throws InstantiationException, IllegalAccessException {
        // would require a noargs constructor for the class, maybe you have a different way to create the result.
        T result = (T) a.getClass().newInstance();
        BeanUtils.copyProperties(a, result);
        BeanUtils.copyProperties(b, result);
        return result;
    }

    @Autowired
    ApiController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping("/users")
    public Collection<UserProjection> users(){
        return this.userRepository.findAllProjectedByOrderByUsernameAsc();
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

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public User updateUser(@PathVariable Long id, @RequestBody User user){
        user.setId(id);
        return this.userRepository.save(user);
    }
}
