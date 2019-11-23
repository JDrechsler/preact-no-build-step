import { h, Component } from 'preact';
import { customStore } from './../store/customStore.js';
import { view } from 'z-preact-easy-state';

class LazyPage extends Component {
  btnClick() {
    console.log('Click');
    customStore.btnClicked += 1;
  }

  btnClickSubtract() {
    console.log('Click -');
    customStore.btnClicked -= 1;
  }
  render() {
    const myStyle = {
      color: 'chocolate',
      backgroundColor: 'azure'
    };

    const myStyles = {
      blueBackground: {
        backgroundColor: 'blue'
      },
      whiteBackground: {
        backgroundColor: 'white',
        color: 'black'
      },
      redishBackground: {
        backgroundColor: '#ffebeb'
      }
    };

    function myCSS(myColor: string) {
      return {
        test: {
          color: myColor
        },
        test2: {
          color: myColor,
          backgroundColor: 'darksalmon'
        }
      };
    }

    return (
      <section>
        <h2 style={myStyle} class="hmmm">
          Lazy
        </h2>
        <p style={myCSS('cornflowerblue').test}>Your favorite food is: {customStore.favFood}</p>
        <p style={customStore.btnClicked < 5 ? myCSS('black').test : myCSS('red').test}>Button clicked: {customStore.btnClicked}</p>
        <button style={myStyles.redishBackground} onClick={this.btnClick}>
          Click me
        </button>
        <button style={myStyles.redishBackground} onClick={this.btnClickSubtract}>
          Click me -
        </button>
      </section>
    );
  }
}

export default view(LazyPage);
