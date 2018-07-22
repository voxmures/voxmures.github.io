<template>
    <div class="flex flex-col h-screen">
        <!-- <header class="bg-blue text-white text-center p-4">
            <slot name="header">
                <h1>My blog</h1>
            </slot>
        </header> -->
        <div class="flex-grow bg-white p-2">
            <slot name="content"></slot>
        </div>
        <!-- <footer class="bg-blue text-white text-center p-2">
            Footer
        </footer> -->
    </div>
</template>