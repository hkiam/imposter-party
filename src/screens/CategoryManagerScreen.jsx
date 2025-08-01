import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useGameStateStore, useGamePersistStore } from '../state/useGameStore';

export default function CategoryManagerScreen() {
  const { categories, setCategories } = useGamePersistStore();
  const { setPhase } = useGameStateStore();

  const [newCategory, setNewCategory] = useState('');
  const [newWords, setNewWords] = useState({});
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const addCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([
      ...categories,
      { name: newCategory.trim(), words: [], active: true },
    ]);
    setNewCategory('');
  };

  const removeCategory = (name) => {
    setCategories(categories.filter((cat) => cat.name !== name));
    if (
      categories.findIndex((cat) => cat.name === name) === openCategoryIndex
    ) {
      setOpenCategoryIndex(null);
    }
  };

  const toggleCategoryActive = (index) => {
    const updated = [...categories];
    updated[index].active = !updated[index].active;
    setCategories(updated);
  };

  const handleToggleOpen = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  const addWordToCategory = (index) => {
    const word = newWords[index]?.word?.trim();
    const hint = newWords[index]?.hint?.trim();
    if (!word || !hint) return;

    const updated = [...categories];
    updated[index].words.push({ word, hint });
    setCategories(updated);
    setNewWords({ ...newWords, [index]: { word: '', hint: '' } });
  };

  const removeWordFromCategory = (catIndex, wordIndex) => {
    const updated = [...categories];
    updated[catIndex].words.splice(wordIndex, 1);
    setCategories(updated);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto pb-20 relative">
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
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => handleToggleOpen(i)}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {openCategoryIndex === i ? '▼' : '▶'}
                </span>
                <h2 className="text-xl font-semibold">{cat.name}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <label>
                  Aktiv:{' '}
                  <input
                    type="checkbox"
                    checked={cat.active}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleCategoryActive(i);
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </label>
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCategory(cat.name);
                  }}
                >
                  ❌
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {openCategoryIndex === i && (
                <motion.div
                  key="category-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mb-2 mt-2">
                    {cat.words.map((entry, j) => (
                      <li
                        key={j}
                        className="flex justify-between items-center text-sm mb-1 bg-gray-100 px-2 py-1 rounded"
                      >
                        <span>
                          <strong>{entry.word}</strong> – {entry.hint}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeWordFromCategory(i, j)}
                        >
                          🗑️
                        </Button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      placeholder="Wort"
                      value={newWords[i]?.word || ''}
                      onChange={(e) =>
                        setNewWords({
                          ...newWords,
                          [i]: { ...newWords[i], word: e.target.value },
                        })
                      }
                    />
                    <Input
                      placeholder="Hinweis"
                      value={newWords[i]?.hint || ''}
                      onChange={(e) =>
                        setNewWords({
                          ...newWords,
                          [i]: { ...newWords[i], hint: e.target.value },
                        })
                      }
                    />
                    <Button onClick={() => addWordToCategory(i)}>➕</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      ))}

      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <Button onClick={() => setPhase('setup')}>Zurück</Button>
      </div>
    </div>
  );
}
