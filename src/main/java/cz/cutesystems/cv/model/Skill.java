package cz.cutesystems.cv.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by kutik on 16.02.18.
 */
@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private int level;

    private String note;

    //@JsonIgnore
    //@ManyToOne
    //@JoinColumn(name="user_id", nullable=false)
    //private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    /*public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/
}
