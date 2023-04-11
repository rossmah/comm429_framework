<script>
    import '$lib/global.css';
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';
  </script>
  
  <Nav />
  
  <main class="container">
    <slot />
  </main>
  
 <Footer />
