package cz.cutesystems.cv.service;

import cz.cutesystems.cv.model.User;

/**
 * Created by kutik on 08.02.18.
 */
public interface UserService {
    public User findByUsername(String username);
}
