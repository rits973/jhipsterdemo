package com.thrymr.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Book.
 */
@Entity
@Table(name = "book")
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "book_name")
    private String book_name;

    @Column(name = "book_isbn_no")
    private String book_isbn_no;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBook_name() {
        return book_name;
    }

    public Book book_name(String book_name) {
        this.book_name = book_name;
        return this;
    }

    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }

    public String getBook_isbn_no() {
        return book_isbn_no;
    }

    public Book book_isbn_no(String book_isbn_no) {
        this.book_isbn_no = book_isbn_no;
        return this;
    }

    public void setBook_isbn_no(String book_isbn_no) {
        this.book_isbn_no = book_isbn_no;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Book book = (Book) o;
        if (book.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), book.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Book{" +
            "id=" + getId() +
            ", book_name='" + getBook_name() + "'" +
            ", book_isbn_no='" + getBook_isbn_no() + "'" +
            "}";
    }
}
