<script setup>
import FooterSection from "./FooterSection.vue"
import NavBar from "./NavigationBar.vue"
import SideBar from "./SideBar.vue"
</script>

<template>
  <div
    class="grid grid-rows-[auto_1fr_auto] min-h-screen text-sky-600 font-[Poppins]"
  >
    <NavBar />
    <SideBar/>
    <FooterSection />
  </div>
</template>
