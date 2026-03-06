import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false 
    })
    // Much lower resolution for dramatic pixelation
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.imageRendering = 'pixelated'
    renderer.domElement.style.imageRendering = '-moz-crisp-edges'
    renderer.domElement.style.imageRendering = 'crisp-edges'
    renderer.setPixelRatio(0.25)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Coffee-themed color palette - more vibrant
    const coffeeColors = [
      0xFF6B35, // Vibrant orange
      0xF7931E, // Bright orange
      0xFFB84D, // Golden
      0x8B4513, // Coffee brown
      0xD2691E, // Chocolate
      0xFFE4C4, // Bisque
      0xFFA500, // Orange
      0xFF8C00, // Dark orange
    ]

    // Create varied pixel art shapes
    const objects = []
    const totalObjects = 100

    for (let i = 0; i < totalObjects; i++) {
      let geometry
      const shapeType = Math.random()
      
      if (shapeType < 0.4) {
        // Blocky cubes - much bigger
        geometry = new THREE.BoxGeometry(
          Math.random() * 0.8 + 0.4,
          Math.random() * 0.8 + 0.4,
          Math.random() * 0.8 + 0.4
        )
      } else if (shapeType < 0.7) {
        // Ultra low-poly spheres (even more blocky)
        geometry = new THREE.SphereGeometry(
          Math.random() * 0.6 + 0.3,
          3,
          3
        )
      } else {
        // Tetrahedrons - bigger
        geometry = new THREE.TetrahedronGeometry(
          Math.random() * 0.6 + 0.2,
          0
        )
      }
      
      const material = new THREE.MeshBasicMaterial({
        color: coffeeColors[Math.floor(Math.random() * coffeeColors.length)],
        transparent: true,
        opacity: Math.random() * 0.5 + 0.5,
      })

      const object = new THREE.Mesh(geometry, material)
      
      // Random position
      object.position.x = (Math.random() - 0.5) * 20
      object.position.y = (Math.random() - 0.5) * 20
      object.position.z = (Math.random() - 0.5) * 15

      // Store velocity and rotation speed - faster movement
      object.userData = {
        velocityY: Math.random() * 0.03 + 0.015,
        velocityX: (Math.random() - 0.5) * 0.02,
        rotationSpeedX: (Math.random() - 0.5) * 0.04,
        rotationSpeedY: (Math.random() - 0.5) * 0.04,
        rotationSpeedZ: (Math.random() - 0.5) * 0.04,
      }

      objects.push(object)
      scene.add(object)
    }

    // Add pixel art style stars - bigger and more visible
    const starCount = 40
    for (let i = 0; i < starCount; i++) {
      const starGeometry = new THREE.PlaneGeometry(0.3, 0.3)
      const starMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFAA,
        transparent: true,
        opacity: Math.random() * 0.4 + 0.5,
      })
      
      const star = new THREE.Mesh(starGeometry, starMaterial)
      star.position.x = (Math.random() - 0.5) * 25
      star.position.y = (Math.random() - 0.5) * 25
      star.position.z = (Math.random() - 0.5) * 15
      
      star.userData = {
        twinkleSpeed: Math.random() * 0.08 + 0.03,
        twinkleOffset: Math.random() * Math.PI * 2,
      }
      
      objects.push(star)
      scene.add(star)
    }

    // Animation loop
    let animationFrameId
    let time = 0
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time += 0.016

      // Animate all objects
      objects.forEach((object, index) => {
        // Float upward with drift
        object.position.y += object.userData.velocityY || 0
        object.position.x += object.userData.velocityX || 0
        
        // Wrap around when objects go off screen
        if (object.position.y > 10) {
          object.position.y = -10
        }
        if (object.position.x > 12) {
          object.position.x = -12
        }
        if (object.position.x < -12) {
          object.position.x = 12
        }

        // Rotation
        if (object.userData.rotationSpeedX) {
          object.rotation.x += object.userData.rotationSpeedX
          object.rotation.y += object.userData.rotationSpeedY
          object.rotation.z += object.userData.rotationSpeedZ
        }
        
        // Twinkle effect for stars
        if (object.userData.twinkleSpeed) {
          object.material.opacity = 
            Math.sin(time * object.userData.twinkleSpeed + object.userData.twinkleOffset) * 0.3 + 0.5
        }
      })

      // Dynamic camera movement - more dramatic
      camera.position.x = Math.sin(time * 0.15) * 1.2
      camera.position.y = Math.cos(time * 0.12) * 0.8
      camera.rotation.z = Math.sin(time * 0.08) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      mountRef.current?.removeChild(renderer.domElement)
      
      // Dispose of Three.js objects
      objects.forEach((object) => {
        object.geometry.dispose()
        object.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'contrast(1.3) saturate(1.5)',
        imageRendering: 'pixelated',
      }}
    />
  )
}

export default ThreeBackground
