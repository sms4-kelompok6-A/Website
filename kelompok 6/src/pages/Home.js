import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Menus } from "../components";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: []
    };
  }

  //Mengambil data produkdariapi
  fetchData = () => {
    fetch(`http://localhost:3000/products/`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          menus: json
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`,
      { method: 'DELETE' })
      .then(res => {
        this.fetchData()
      })
  }

  render() {
    const { menus } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col className="mt-3 mb-3">
              <h4>
                <strong>Daftar Pesan Tiket</strong>
              </h4>
            </Col>
            <Col className="mt-3 mb-3 col-auto">
              <Link to='/addPost'> 
                <Button>+   Tambah</Button>
              </Link>
            </Col>
            <hr />
            <Row className="overflow-auto menu">
              {menus &&
                menus.map((menu) => (
                  <Menus
                    id={menu.id}
                    key={menu.id}
                    nama={menu.nama}
                    kode={menu.kode}
                    gambar={menu.gambar}
                    harga={menu.harga}
                    delete={this.handleDelete}
                  />
                ))}
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}
