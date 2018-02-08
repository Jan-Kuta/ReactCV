package cz.cutesystems.cv.repository;

import cz.cutesystems.cv.model.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by kutik on 08.02.18.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
