import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {

  @Prop() private msg?: string;

  public render (h) {
    return (
      <div>
        <img src={require('../assets/logo.png')} style={{width: '50px'}} />
        {this.msg}
      </div>
    )
  }

}