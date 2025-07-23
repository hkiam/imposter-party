import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function CategoryManagerScreen({ categories, setCategories, onBack }) {
  const [newCategory, setNewCategory] = useState("");
  const [newWords, setNewWords] = useState({});

  const addCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, { name: newCategory.trim(), words: [], active: true }]);
    setNewCategory("");
  };

  const removeCategory = (name) => {
    setCategories(categories.filter((cat) => cat.name !== name));
  };

  const toggleCategory = (index) => {
    const updated = [...categories];
    updated[index].active = !updated[index].active;
    setCategories(updated);
  };

  const addWordToCategory = (index) => {
    const word = newWords[index]?.word?.trim();
    const hint = newWords[index]?.hint?.trim();
    if (!word || !hint) return;

    const updated = [...categories];
    updated[index].words.push({ word, hint });
    setCategories(updated);
    setNewWords({ ...newWords, [index]: { word: "", hint: "" } });
  };

  const removeWordFromCategory = (catIndex, wordIndex) => {
    const updated = [...categories];
    updated[catIndex].words.splice(wordIndex, 1);
    setCategories(updated);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kategorien verwalten</h1>

      <Card className="mb-4">
        <CardContent>
          <div className="flex gap-2 mb-2">
            <Input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Neue Kategorie"
            />
            <Button onClick={addCategory}>Hinzufügen</Button>
          </div>
        </CardContent>
      </Card>

      {categories.map((cat, i) => (
        <Card key={cat.name} className="mb-4">
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{cat.name}</h2>
              <div className="flex gap-2">
                <label>
                  Aktiv:{" "}
                  <input
                    type="checkbox"
                    checked={cat.active}
                    onChange={() => toggleCategory(i)}
                  />
                </label>
                <Button variant="ghost" onClick={() => removeCategory(cat.name)}>
                  ❌
                </Button>
              </div>
            </div>

            <ul className="mb-2">
              {cat.words.map((entry, j) => (
                <li key={j} className="flex justify-between items-center text-sm mb-1 bg-gray-100 px-2 py-1 rounded">
                  <span>
                    <strong>{entry.word}</strong> – {entry.hint}
                  </span>
                  <Button variant="ghost" size="sm" onClick={() => removeWordFromCategory(i, j)}>
                    🗑️
                  </Button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Wort"
                value={newWords[i]?.word || ""}
                onChange={(e) =>
                  setNewWords({ ...newWords, [i]: { ...newWords[i], word: e.target.value } })
                }
              />
              <Input
                placeholder="Hinweis"
                value={newWords[i]?.hint || ""}
                onChange={(e) =>
                  setNewWords({ ...newWords, [i]: { ...newWords[i], hint: e.target.value } })
                }
              />
              <Button onClick={() => addWordToCategory(i)}>➕</Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button onClick={onBack} className="mt-4">
        Zurück
      </Button>
    </div>
  );
}
