package cz.cutesystems.cv.repository;

import cz.cutesystems.cv.model.User;
import cz.cutesystems.cv.model.UserProjection;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

/**
 * Created by kutik on 08.02.18.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    Collection<UserProjection> findAllProjectedBy();
}
