// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 获取遮罩节点，该节点下需要挂一个图片节点，用来充当遮罩图片
        let maskNode: cc.Node = cc.find("Canvas/maskNode");
        // 设置遮罩节点的size，该区域内会显示遮罩图片，该值等同于编辑器中该节点的size属性
        maskNode.width = 70;
        maskNode.height = 70;

        // 查询该节点的Mask组件
        let maskComponent : cc.Mask = maskNode.getComponent(cc.Mask);

        // 开启反向遮罩，则达到默认遮罩的反向效果
        // maskComponent.inverted = true;

        // 使用Mask组件对象(实际是通过mask组件的_graphics对象)可以动态控制“显示遮罩图片”的区域, 该区域即为该对象的绘制区域
        let graphics = maskComponent._graphics;
        graphics.circle(100,100,80);
        graphics.fill();
        graphics.stroke();
    }

    // update (dt) {}
}
