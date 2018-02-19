package cz.cutesystems.cv.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by kutik on 16.02.18.
 */
@Entity
@Table(name = "hobbies")
public class Hobby {
    @Id
    @GeneratedValue
    private Long id;

    private String notes;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

}
