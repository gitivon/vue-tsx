import { Component, Prop, Vue } from 'vue-property-decorator';
import Demo from '@/components//Demo'

@Component
export default class About extends Vue {

  @Prop() private msg?: string;

  public handlerClick (self) {
    console.log(self)
  }

  public render () {
    const data = {
      props: {
        ok: this.msg
      },
      on: {
        click: this.handlerClick
      }
    }
    return (
      <div>
        {this.msg}
        <Demo {...data}
          // ok={this.msg} 
          // onCliek={this.handlerClick} 
        />
      </div>
    )
  }

}