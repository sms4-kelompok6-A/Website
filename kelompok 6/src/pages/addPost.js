import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

class AddPost extends Component {
    state = {
        addData: {
            id: 1,
            kode: "",
            nama: "",
            harga: 1,
            gambar: "pulaumerah.jpg"
        }
    }
    handleTambah = (event) => {
        let formInsert = { ...this.state.addData };
        let timestamp = new Date().getTime();
        formInsert['id'] = timestamp;
        formInsert['gambar'] = "pulaumerah.jpg";
        formInsert[event.target.name] = event.target.value;
        this.setState({
            addData: formInsert
        });
    }
    handleSimpan = () => {
        fetch(`http://localhost:3001/products/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addData)
        })
            .then(
                alert("Data tersimpan!")
            )
    }
    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Kode :</label>
                        <input type="text" name="kode" id='kode' placeholder="Kode..." onChange={this.handleTambah} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nama :</label>
                        <input type="text" name="nama" id='nama' placeholder="Nama..." onChange={this.handleTambah} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Harga :</label>
                        <input type="number" name="harga" id='harga' placeholder="Harga..." onChange={this.handleTambah} />
                    </div>
                    <div className="mb-3">
                        <Button type="submit" onClick={this.handleSimpan}>Simpan</Button>
                    </div>
                </form>

            </div>
        );
    }
}

export default AddPost;