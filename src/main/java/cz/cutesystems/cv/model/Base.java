package cz.cutesystems.cv.model;

import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

/**
 * Created by kutik on 16.02.18.
 */
@Projection(name = "base", types = { User.class })
interface Base {

    Long getUserId();

    String getUsername();

    Set<Role> getRoles();
}