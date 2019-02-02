import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const RotatingCube = () => {
  const mount = useRef(null)
  const [isAnimating, setAnimating] = useState(true)
  const controls = useRef(null)

  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    let frameId

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

    var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 3 } );

    var wireframe = new THREE.LineSegments( geo, mat );
    const cube = wireframe
    scene.add(cube)

    const circgeo = new THREE.SphereGeometry(0.1,8,8)
    const circmat = new THREE.MeshBasicMaterial({ color: 0xb73a49})
    const sphere = new THREE.Mesh(circgeo, circmat)

    scene.add(sphere)
    camera.position.z = 4
    renderer.setClearColor('#FFFFFF')
    renderer.setSize(width, height)

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }

    const animate = () => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      // if(camera.position.z <= 6.0) {
      //   camera.position.z += 0.01
      //   sphere.position.y += 0.005
      // }
      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      frameId = null
    }

    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)

    start()
    handleResize()
    controls.current = { start, stop }

    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      mount.current.removeChild(renderer.domElement)

      scene.remove(cube)
      geo.dispose()
      mat.dispose()
      scene.remove(sphere)
      circgeo.dispose()
      circmat.dispose()
    }
  }, [])

  useEffect(
    () => {
      if (isAnimating) {
        controls.current.start()
      } else {
        controls.current.stop()
      }
    },
    [isAnimating],
  )

  /* eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions
  */
  return (
    <div
      className="vis"
      ref={mount}
      // onClick={() => setAnimating(!isAnimating)}
      // onMouseEnter={() => setAnimating(!isAnimating)}
      style={{width:"200px", height:"200px", margin: 'auto'}}
    />
  )
}

export default RotatingCube