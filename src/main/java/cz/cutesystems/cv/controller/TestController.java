package cz.cutesystems.cv.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @RequestMapping("/home")
    public String home(){
        return "I am home!!!";
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @RequestMapping("/user")
    public String user(){
        return "I am user!!!";
    }

    @Secured({"ROLE_ADMIN"})
    @RequestMapping("/admin")
    public String admin(){
        return "I am admin!!!";
    }

}
