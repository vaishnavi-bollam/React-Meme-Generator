import {Component} from 'react'

import {Heading, Input, Button, Container, Para} from './styledComponents'
import Options from '../Options/index'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    imageUrlValue: '',
    topText: '',
    buttomText: '',
    showImage: false,
  }

  onMemeChange = event => {
    console.log('change event occured')
    this.setState({fontSize: event.target.value})
  }

  buttonClicked = () => {
    const {imageUrlValue} = this.state
    console.log(imageUrlValue)
    this.setState({
      showImage: true,
    })
  }

  changedImageUrl = event => {
    this.setState({imageUrlValue: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeButtomText = event => {
    this.setState({buttomText: event.target.value})
  }

  render() {
    const {imageUrlValue, topText, buttomText, showImage, fontSize} = this.state
    console.log(fontSize)
    return (
      <div>
        <Heading data-testid="meme">Meme Generator</Heading>
        <form>
          <label htmlFor="imageUrl">Image URL</label>
          <br />
          <Input
            id="imageUrl"
            type="text"
            placeholder="Enter the Image URL"
            value={imageUrlValue}
            onChange={this.changedImageUrl}
          />
          <br />
          <label htmlFor="topText">Top Text</label>
          <br />
          <Input
            id="topText"
            type="text"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.changeTopText}
          />
          <br />
          <label htmlFor="bottomText">Bottom Text</label>
          <br />
          <Input
            id="bottomText"
            type="text"
            placeholder="Enter the Bottom Text"
            value={buttomText}
            onChange={this.changeButtomText}
          />
          <br />
          <label htmlFor="fontSize">Font Size</label>
          <select id="fontSize" onChange={this.onMemeChange}>
            {fontSizesOptionsList.map(eachOption => (
              <Options
                eachOption={eachOption.optionId}
                key={eachOption.optionId}
              />
            ))}
          </select>
          <br />
        </form>

        <Button onClick={this.buttonClicked}>Generate</Button>
        {showImage ? (
          <Container imageUrl={imageUrlValue}>
            <Para fontSiz={fontSize}>{topText}</Para>
            <Para fontSiz={fontSize}>{buttomText}</Para>
          </Container>
        ) : null}
      </div>
    )
  }
}

export default MemeGenerator
