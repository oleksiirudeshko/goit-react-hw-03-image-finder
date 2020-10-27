import React, { Component } from "react";

import Section from "./Section";
import Searchbar from "./Searchbar/Searchbar";
import Spinner from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import imgApi from "../services/ImgAPI";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  setLargeImg = (url) => {
    this.setState({ largeImageURL: url });
  };

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  onImgClick = (url) => {
    this.toggleModal();
    this.setLargeImg(url);

    // }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
      this.setState({ loading: true });
    }
    this.scroll();
  }

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    imgApi
      .imgApi(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchQuery = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  render() {
    const { images, loading, error, showModal } = this.state;
    const chekImages = images.length > 0 && !loading;
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleSearchQuery} />
        </Section>

        <Section>
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {loading && <Spinner />}
          {chekImages && (
            <>
              <ImageGallery
                images={images}
                value={this.state.searchQuery}
                onClick={this.toggleModal}
                onImgClick={this.onImgClick}
              />

              <Button onClick={this.fetchImages} />
            </>
          )}
        </Section>

        <Section>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={this.state.largeImageURL} alt=""></img>
              <button type="button" className="Xbtn" onClick={this.toggleModal}>
                x
              </button>
            </Modal>
          )}
        </Section>
      </>
    );
  }
}
