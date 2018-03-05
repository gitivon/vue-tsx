import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  
  @Prop() private ok?: string;

  public async clickHandler (): Promise<Boolean> {
    console.log('click demo')
    this.$emit('click', this)
    return true
  }

  render () {
    return (
      <div>
        <h1 onClick={this.clickHandler}>Demo</h1>
        <p>{this.ok}</p>
      </div>
    )
  }

}