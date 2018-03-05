import { Component, Prop, Vue } from 'vue-property-decorator';
import Demo from '@/components//Demo'

@Component
export default class About extends Vue {

  @Prop() private msg?: string;

  public handlerClick (self) {
    console.log(self)
  }

  public render () {
    return (
      <div>
        {this.msg}
        <Demo 
          ok={this.msg} 
          on-click={this.handlerClick} 
          // on-cancel={this.handlerClick} 
        />
      </div>
    )
  }

}