<template>
    <div>
        <h1>Slot插槽</h1>
        <slot>
            <!-- 会把Slot标签里面嵌套的标签 放在这个位置-->
        </slot>
        <div>---------------------------</div>
        <slot name="bottom"></slot>
    </div>
</template>