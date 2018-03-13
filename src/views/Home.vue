<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { VNode } from 'vue';
import Logo from '@/assets/logo.png'

@Component
export default class Home extends Vue {
  private msg: string = "Welcome to Your Vue.ts App"
  private isWrap: boolean = true

  render(): VNode {
    const a: VNode = <HelloWorld msg={this.msg} />
    const wrap = (t: VNode): VNode => (
      <div class="red">{t}</div>
    )
    return (
      <div class="abc">
        <img src={Logo} />
        {this.isWrap ? wrap(a) : a}
      </div>
    )
  }

}
</script>
<style lang="scss" scoped>
.abc {
  color: blue;
}
.red {
  color: red;
}
</style>

