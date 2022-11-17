import {Component} from 'react'
import {
  MainContainer,
  Form,
  MainHeading,
  Label,
  Input,
  Select,
  Options,
  GenerateButton,
  ImageContainer,
  TopText,
} from './styledComponents'

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
// {
//     optionId: '8',
//     displayText: '8',
//   }

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    generate: false,
  }

  imageUrlInput = event => {
    this.setState({imageUrl: event.target.value})
    // const {imageUrl} = this.state
    // console.log(imageUrl)
  }

  topTextInput = event => {
    this.setState({topText: event.target.value})
    // const {topText} = this.state
    // console.log(topText)
  }

  bottomTextInput = event => {
    this.setState({bottomText: event.target.value})
    // const {bottomText} = this.state
    // console.log(bottomText)
  }

  fontSizeInput = event => {
    this.setState({fontSize: event.target.value})
    // const {fontSize} = this.state
    // console.log(fontSize)
  }

  generateImage = event => {
    event.preventDefault()
    this.setState({generate: true})

    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(imageUrl, topText, bottomText, fontSize)
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, generate} = this.state
    console.log('console', generate)
    return (
      <MainContainer>
        <Form onSubmit={this.generateImage}>
          <MainHeading>Meme Generator</MainHeading>
          <Label htmlFor="imageUrl">Image Url</Label>
          <Input
            id="imageUrl"
            onChange={this.imageUrlInput}
            placeholder="Enter the Image URL"
            value={imageUrl}
          />
          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            onChange={this.topTextInput}
            placeholder="Enter the Top Text"
            value={topText}
          />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            onChange={this.bottomTextInput}
            placeholder="Enter the Bottom Text"
            value={bottomText}
          />
          <Label htmlFor="fontSize">Font Size</Label>
          <Select id="fontSize" onChange={this.fontSizeInput}>
            {fontSizesOptionsList.map(each => (
              <Options key={each.optionId} value={each.optionId}>
                {each.displayText}
              </Options>
            ))}
          </Select>
          <GenerateButton type="submit">Generate</GenerateButton>
        </Form>
        {generate && (
          <ImageContainer bgImage={imageUrl} data-testid="meme">
            <TopText fontSize={fontSize}>{topText}</TopText>
            <TopText fontSize={fontSize}>{bottomText}</TopText>
          </ImageContainer>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
