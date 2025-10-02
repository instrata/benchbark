<script setup lang="ts">
import BenchbarkIcon from "@/components/BenchbarkIcon.vue";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Checkbox} from "@/components/ui/checkbox";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Combobox, ComboboxInput, ComboboxItem, ComboboxList} from "@/components/ui/combobox";
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Input} from "@/components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Progress} from "@/components/ui/progress";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {Slider} from "@/components/ui/slider";
import {Switch} from "@/components/ui/switch";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {TagsInput, TagsInputInput} from "@/components/ui/tags-input";
import {Textarea} from "@/components/ui/textarea";
import {Toggle} from "@/components/ui/toggle";
import {Label} from "@/components/ui/label";
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
    <header class="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <div class="flex items-center space-x-3">
        <BenchbarkIcon class="w-8 h-8" />
        <h1 class="text-2xl font-mono font-black">BenchBark</h1>
      </div>
    </header>

    <!-- Content -->
    <main class="p-6 space-y-10">
      <section>
        <h2 class="text-lg font-semibold mb-2">
          About BenchBark
          <BenchbarkIcon class="size-6 inline-block" />
        </h2>
        <p class="text-sm text-gray-600">
          BenchBark is a testbed for UI components. It exists to benchmark
          automatic screenshot tools and accessibility APIs. You can interact
          with buttons, dialogs, menus, inputs, and other elements to measure
          how quickly and reliably these states can be captured.
        </p>
      </section>

      <!-- Accordion -->
      <section>
        <h2 class="font-medium mb-2">Accordion</h2>
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content for item 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content for item 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <!-- Button -->
      <section>
        <h2 class="font-medium mb-2">Button</h2>
        <Button>Click me</Button>
      </section>

      <!-- Calendar -->
      <section>
        <h2 class="font-medium mb-2">Calendar</h2>
        <Calendar />
      </section>

      <!-- Carousel -->
      <section>
        <h2 class="font-medium mb-2">Carousel</h2>
        <Carousel class="relative">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <!-- Checkbox -->
      <section>
        <h2 class="font-medium mb-2">Checkbox</h2>
        <Checkbox id="chk1" />
        <Label for="chk1" class="inline-block ml-2">Accept terms</Label>
      </section>

      <!-- Collapsible -->
      <section>
        <h2 class="font-medium mb-2">Collapsible</h2>
        <Collapsible>
          <CollapsibleTrigger>Show content</CollapsibleTrigger>
          <CollapsibleContent>This is hidden until expanded.</CollapsibleContent>
        </Collapsible>
      </section>

      <!-- Combobox -->
      <section>
        <h2 class="font-medium mb-2">Combobox</h2>
        <Combobox>
          <ComboboxInput placeholder="Search..." />
          <ComboboxList>
            <ComboboxItem value="one">One</ComboboxItem>
            <ComboboxItem value="two">Two</ComboboxItem>
          </ComboboxList>
        </Combobox>
      </section>

      <!-- Context Menu -->
      <section>
        <h2 class="font-medium mb-2">Context Menu</h2>
        <ContextMenu>
          <ContextMenuTrigger>
            <div class="border border-double h-20 grid place-items-center">Right click me</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Option 1</ContextMenuItem>
            <ContextMenuItem>Option 2</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <!-- Dialog -->
      <section>
        <h2 class="font-medium mb-2">Dialog</h2>
        <Dialog>
          <DialogTrigger><Button>Open Dialog</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Some description here.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <!-- Drawer -->
      <section>
        <h2 class="font-medium mb-2">Drawer</h2>
        <Drawer>
          <DrawerTrigger><Button>Open Drawer</Button></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>Details inside drawer.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>

      <!-- Dropdown Menu -->
      <section>
        <h2 class="font-medium mb-2">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger><Button>Options</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item A</DropdownMenuItem>
            <DropdownMenuItem>Item B</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <!-- Input -->
      <section>
        <h2 class="font-medium mb-2">Input</h2>
        <Input placeholder="Type here" />
      </section>

      <!-- Popover -->
      <section>
        <h2 class="font-medium mb-2">Popover</h2>
        <Popover>
          <PopoverTrigger><Button>Open Popover</Button></PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      </section>

      <!-- Progress -->
      <section>
        <h2 class="font-medium mb-2">Progress</h2>
        <Progress :model-value="50" />
      </section>

      <!-- Radio Group -->
      <section>
        <h2 class="font-medium mb-2">Radio Group</h2>
        <RadioGroup>
          <RadioGroupItem id="r1" value="one" />
          <Label for="r1">One</Label>
          <RadioGroupItem id="r2" value="two" />
          <Label for="r2">Two</Label>
        </RadioGroup>
      </section>

      <!-- Select -->
      <section>
        <h2 class="font-medium mb-2">Select</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <!-- Sheet -->
      <section>
        <h2 class="font-medium mb-2">Sheet</h2>
        <Sheet>
          <SheetTrigger><Button>Open Sheet</Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Details in sheet.</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>

      <!-- Slider -->
      <section>
        <h2 class="font-medium mb-2">Slider</h2>
        <Slider :default-value="[50]" />
      </section>

      <!-- Switch -->
      <section>
        <h2 class="font-medium mb-2">Switch</h2>
        <Switch />
      </section>

      <!-- Tabs -->
      <section>
        <h2 class="font-medium mb-2">Tabs</h2>
        <Tabs default-value="one">
          <TabsList>
            <TabsTrigger value="one">Tab One</TabsTrigger>
            <TabsTrigger value="two">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="one">Content 1</TabsContent>
          <TabsContent value="two">Content 2</TabsContent>
        </Tabs>
      </section>

      <!-- Tags Input -->
      <section>
        <h2 class="font-medium mb-2">Tags Input</h2>
        <TagsInput>
          <TagsInputInput />
        </TagsInput>
      </section>

      <!-- Textarea -->
      <section>
        <h2 class="font-medium mb-2">Textarea</h2>
        <Textarea placeholder="Enter text" />
      </section>

      <!-- Toggle -->
      <section>
        <h2 class="font-medium mb-2">Toggle</h2>
        <Toggle>Toggle Me</Toggle>
      </section>
    </main>
  </div>
</template>

<style scoped>
section {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
}
</style>
