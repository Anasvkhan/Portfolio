"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SNIPPETS = [
  // JavaScript
  { text: "function greet(name) {", color: "#a78bfa" },
  { text: "  return `Hello, ${name}!`;", color: "#a78bfa" },
  { text: "}", color: "#a78bfa" },
  { text: "const arr = [1, 2, 3, 4, 5];", color: "#a78bfa" },
  { text: "arr.map(x => x * 2).filter(x => x > 4)", color: "#a78bfa" },
  { text: "for (let i = 0; i < arr.length; i++) {", color: "#a78bfa" },
  { text: "console.log('Hello, World!')", color: "#a78bfa" },
  { text: "const obj = { name: 'Anas', age: 23 };", color: "#a78bfa" },
  { text: "setTimeout(() => doSomething(), 1000)", color: "#a78bfa" },
  { text: "async function getData(url) {", color: "#818cf8" },
  { text: "  const res = await fetch(url);", color: "#818cf8" },
  { text: "  return res.json();", color: "#818cf8" },
  { text: "const [count, setCount] = useState(0)", color: "#818cf8" },
  { text: "export default function App() {", color: "#818cf8" },
  { text: "try { } catch (err) { console.error(err) }", color: "#818cf8" },
  { text: "const sum = (a, b) => a + b;", color: "#a78bfa" },
  { text: "Object.keys(obj).forEach(key => { });", color: "#a78bfa" },
  // Python
  { text: "def factorial(n):", color: "#67e8f9" },
  { text: "    return 1 if n <= 1 else n * factorial(n-1)", color: "#67e8f9" },
  { text: "for i in range(10):", color: "#67e8f9" },
  { text: "    print(f'Number: {i}')", color: "#67e8f9" },
  { text: "nums = [x**2 for x in range(20) if x % 2 == 0]", color: "#67e8f9" },
  { text: "with open('file.txt', 'r') as f:", color: "#67e8f9" },
  { text: "    data = f.readlines()", color: "#67e8f9" },
  { text: "if __name__ == '__main__':", color: "#67e8f9" },
  { text: "class Animal:", color: "#67e8f9" },
  { text: "    def __init__(self, name):", color: "#67e8f9" },
  { text: "        self.name = name", color: "#67e8f9" },
  { text: "print('Hello, World!')", color: "#67e8f9" },
  { text: "x = [i for i in range(100)]", color: "#67e8f9" },
  // Java
  { text: "public class HelloWorld {", color: "#fbbf24" },
  { text: "  public static void main(String[] args) {", color: "#fbbf24" },
  { text: '    System.out.println("Hello, World!");', color: "#fbbf24" },
  { text: "  }", color: "#fbbf24" },
  { text: "int[] arr = new int[10];", color: "#fbbf24" },
  { text: "for (int i = 0; i < arr.length; i++) {", color: "#fbbf24" },
  { text: "List<String> list = new ArrayList<>();", color: "#fbbf24" },
  { text: "interface Shape { double area(); }", color: "#fbbf24" },
  { text: "throw new IllegalArgumentException(msg);", color: "#fbbf24" },
  { text: "String s = String.valueOf(num);", color: "#fbbf24" },
  // C
  { text: "#include <stdio.h>", color: "#94a3b8" },
  { text: "#include <stdlib.h>", color: "#94a3b8" },
  { text: "int main() {", color: "#94a3b8" },
  { text: '  printf("Hello, World!\\n");', color: "#94a3b8" },
  { text: "  return 0;", color: "#94a3b8" },
  { text: "int arr[10] = {0};", color: "#94a3b8" },
  { text: "for (int i = 0; i < n; i++) {", color: "#94a3b8" },
  { text: "int* ptr = (int*)malloc(sizeof(int) * n);", color: "#94a3b8" },
  { text: "struct Node { int val; struct Node* next; };", color: "#94a3b8" },
  { text: "free(ptr);", color: "#94a3b8" },
  { text: "scanf(\"%d\", &num);", color: "#94a3b8" },
];

interface Item {
  id: number;
  text: string;
  color: string;
  x: number;
  startY: number;
  duration: number;
  opacity: number;
  size: number;
}

export default function FloatingCode() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const all = [...SNIPPETS, ...SNIPPETS].slice(0, 42);
    setItems(
      all.map((s, i) => ({
        id: i,
        text: s.text,
        color: s.color,
        x: Math.random() * 70,
        startY: -(Math.random() * 200 + 10),
        duration: 28 + Math.random() * 22,
        opacity: 0.22 + Math.random() * 0.18,
        size: 12 + Math.floor(Math.random() * 3),
      }))
    );
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      {items.map((item) => (
        <motion.p
          key={item.id}
          className="absolute font-mono whitespace-nowrap"
          style={{
            left: `${item.x}%`,
            color: item.color,
            opacity: item.opacity,
            fontSize: `${item.size}px`,
            willChange: "transform",
          }}
          initial={{ y: `${item.startY}vh` }}
          animate={{ y: "115vh" }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: Math.random() * 4,
          }}
        >
          {item.text}
        </motion.p>
      ))}
    </div>
  );
}
